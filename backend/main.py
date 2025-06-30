from fastapi import FastAPI

app = FastAPI()

@app.get("/search")
def searchHandler():
    return {"Data": "Type"}