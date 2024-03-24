from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
import io
from PIL import Image
import base64
from openai_helper import extract_user_details

app = FastAPI()

@app.post("/upload-image/")
async def create_upload_file(file: UploadFile = File(...)):
    try:
        # Read the file content
        file_content = await file.read()
        
        # Optionally, you might want to verify if the uploaded file is a valid image.
        # You can do this by trying to open it with PIL.
        # Resetting the file pointer is necessary here because 'file.read()' above would have exhausted the stream.
        try:
            Image.open(io.BytesIO(file_content)).verify()
        except Exception:
            return JSONResponse(content={"message": "Invalid image format!"}, status_code=400)
        
        # Encode the file content to base64
        base64image = base64.b64encode(file_content).decode('utf-8')
        
        # Pass the base64 string to your function
        response = extract_user_details(base64image)
        
        # Return a response including the data from 'extract_user_details'
        return JSONResponse(content={"message": "Image received and processed!", "data": response}, status_code=200)

    except Exception as e:
        return JSONResponse(content={"message": str(e)}, status_code=500)
