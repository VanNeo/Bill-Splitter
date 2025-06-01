import easyocr

reader = easyocr.Reader(['en'])
result = reader.readtext('./samples/WalmartReceipt.jpg')

print(result)