from databases import Database
from dotenv import load_dotenv
import os

load_dotenv()  # loads variables from .env file in current directory

database_url = os.getenv("DATA_URL")

database = Database(database_url)