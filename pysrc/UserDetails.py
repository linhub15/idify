from pydantic.main import BaseModel

class UserDetail(BaseModel):
    license_number: str
    first_name: str
    last_name: str
    street_address: str
    post_code: str
    city: str
    province: str
    country: str
    issue_date: str
    date_of_birth: str
    sex : str
    eye_color : str
    hair_color : str    
    height: str
    weight: str