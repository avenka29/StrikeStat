from fastapi import FastAPI
from database import database
app = FastAPI()

@app.on_event("startup")
async def connectDatabase():
    await database.connect()

@app.on_event("shutdown")
async def cleanUp():
    await database.disconnect()

@app.get("/search")
async def searchHandler(search: str):
    sql = f"SELECT * FROM fighters_new WHERE name ILIKE '{search}%' ORDER BY name"
    results = await database.fetch_all(query = sql)
    return results