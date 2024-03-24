from dotenv import load_dotenv
import os

# Load the .env file
load_dotenv()

# Now you can access your environment variables using os.getenv
openai_api_key = os.getenv("OPENAI_API_KEY")
endpoint = os.getenv("AZURE_ENDPOINT")
key = os.getenv("AZURE_KEY")

# print(openai_api_key)
