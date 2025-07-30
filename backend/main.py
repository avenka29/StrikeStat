from fastapi import FastAPI
from database import database
from pydantic import BaseModel
from datetime import date

from typing import List, Optional
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["*"] to allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # allow all HTTP methods
    allow_headers=["*"],  # allow all headers
)

# Define the Fighter model
class Fighter(BaseModel):
    fighter_id: int
    name: str
    birthdate: Optional[str] = None
    nickname: Optional[str] = None
    association: List[str]
    weight_class: str
    wins: int
    losses: int
    draws: int
    wins_by_ko_tko: int
    city: Optional[str] = None
    weight: Optional[int] = None
    sex: str
    id: int
    reach_cms: Optional[float] = None
    age: Optional[int] = None
    height_feet: Optional[int] = None
    height_inches: Optional[int] = None
    height_cm: Optional[float] = None
    stance: Optional[str] = None

# Define the Match model
class Match(BaseModel):
    left_fighter_name: str
    right_fighter_name: str
    winner_name: Optional[str] = None
    method: str
    date: str
    location: str
    lf: int
    rf: int
    left_fighter: Fighter
    right_fighter: Fighter

@app.on_event("startup")
async def connectDatabase():
    await database.connect()

@app.on_event("shutdown")
async def cleanUp():
    await database.disconnect()

@app.get("/search")
async def searchHandler(search: str):
    sql = f"""SELECT * FROM fighters_new WHERE name ILIKE '{search}%' ORDER BY name"""
    results = await database.fetch_all(query = sql)
    return results

@app.get("/matches")
async def getMatches(name: str):
    query = f"""SELECT * FROM matches_new WHERE left_fighter_name = '{name}' OR right_fighter_name = '{name}'
    ORDER BY date DESC"""
    results = await database.fetch_all(query = query)
    return results

@app.get("/matchtry")
async def getMatchesTry(name: str):
    query = f"""
        SELECT
    m.left_fighter_name, m.right_fighter_name, m.winner_name, m.method, m.event_title,
    m.date, m.location, m.left_fighter_ref as lf, m.right_fighter_ref as rf,

    json_build_object(
        'fighter_id', lf.id,
        'name', lf.name,
        'birthdate', lf.birthdate,
        'nickname', lf.nickname,
        'association', lf.association,
        'weight_class', lf.weight_class,
        'wins', lf.wins,
        'losses', lf.losses,
        'draws', lf.draws,
        'wins_by_ko_tko', lf.wins_by_ko_tko,
        'city', lf.city,
        'weight', lf.weight,
        'sex', lf.sex,
        'id', lf.id,
        'reach_cms', lf.reach_cms,
        'age', lf.age,
        'height_feet', lf.height_feet,
        'height_inches', lf.height_inches,
        'height_cm', lf.height_cm,
        'stance', lf.stance
    ) AS left_fighter,

    json_build_object(
        'fighter_id', rf.id,
        'name', rf.name,
        'birthdate', rf.birthdate,
        'nickname', rf.nickname,
        'association', rf.association,
        'weight_class', rf.weight_class,
        'wins', rf.wins,
        'losses', rf.losses,
        'draws', rf.draws,
        'wins_by_ko_tko', rf.wins_by_ko_tko,
        'city', rf.city,
        'weight', rf.weight,
        'sex', rf.sex,
        'id', rf.id,
        'reach_cms', rf.reach_cms,
        'age', rf.age,
        'height_feet', rf.height_feet,
        'height_inches', rf.height_inches,
        'height_cm', rf.height_cm,
        'stance', rf.stance
    ) AS right_fighter

FROM matches_new m
JOIN fighters_new lf ON m.left_fighter_ref = lf.id
JOIN fighters_new rf ON m.right_fighter_ref = rf.id
WHERE lf.name = :name OR rf.name = :name
ORDER BY m.date DESC;

    """
    results = await database.fetch_all(query=query, values={"name": name})
    return results
