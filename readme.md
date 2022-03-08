# Mauritius Media Search API

The API searches across major Mauritian media platforms from a search query. It scrapes these platforms and returns an object containing articles found against the search query from all these platforms.

## Supported Platforms

1. Le Defi Media
2. L'express Mauritius
3. Star Mauritius
4. ION News

## Run

Requirements: NodeJS LTS

1. `npm i`
2. `npm run dev`
3. Access the endpoint locally at *http://localhost:3000/:query*

## API Use

*:query* can only contain letters, numbers and '-' (to represent an empty space)
