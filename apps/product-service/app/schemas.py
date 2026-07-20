from pydantic import BaseModel
from datetime import datetime


class ProductBase(BaseModel):
    name: str
    description: str
    price: float
    stock: int


class ProductCreate(ProductBase):
    pass


class ProductUpdate(ProductBase):
    pass


class ProductResponse(ProductBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True