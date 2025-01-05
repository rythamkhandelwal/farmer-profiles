# Farmer Profiles Generator

This project hosts a service that generates and serves static HTML pages for farmer profiles. It uses Express to handle requests and Render for deployment.

## How to Use

1. Clone the repository.
2. Deploy the project on Render.
3. Use the provided API to send farmer data and generate profiles.

## API Endpoints

### POST /generate-profile

**Request Body:**
```json
{
  "name": "Farmer Name",
  "phone": "1234567890",
  "address": "Farmer Address",
  "products": "List of Products",
  "journey": "Farmer's Journey"
}
