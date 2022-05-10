from pydantic import BaseModel

class SongModel(BaseModel):
    id: int
    title: str
    artist: str
    release_date: str
