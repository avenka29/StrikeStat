from fastapi import FastAPI
from database import database
from pydantic import BaseModel
from datetime import date
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["*"] to allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # allow all HTTP methods
    allow_headers=["*"],  # allow all headers
)

class Match(BaseModel):
    left_fighter_name: str
    right_fighter_name: str
    winner_name: str
    match: int
    round: int
    time: str
    method: str
    referee_name: str
    date: date
    event_title: str
    location: str

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