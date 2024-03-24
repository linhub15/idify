# idify

Automatically fillup government forms with your id card.

Discord 
https://discord.gg/ZCH3z8bk


## Form fields

```
family_name: string
given_name: string
address: string
date_of_birth: string (ISO 8601)
license_number: NNNNNN-NNN
sex: "M" | "F" | "X"
```


## OCR API
    
```
curl -X 'POST' \
  'http://127.0.0.1:8000/upload-image/' \
  -H 'accept: application/json' \
  -H 'Content-Type: multipart/form-data' \
  -F 'file=@/Users/habib/Documents/idify/pysrc/img/high_contrast.jpeg;type=image/jpeg'
```
