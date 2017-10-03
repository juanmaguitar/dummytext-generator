
## How do I use the API? (https://loripsum.net/)

Just do a GET request on `api-lorem.herokuapp.com`, to get some placeholder text. You can add extra parameters to specify the output you're going to get. Say, you need 10 short paragraphs with headings, use `api-lorem.herokuapp.com/10/short/headers`. All of the possible parameters are:

- `(integer)` - The number of paragraphs to generate.
- `short`, medium, long, verylong - The average length of a paragraph.
- `decorate` - Add bold, italic and marked text.
- `link` - Add links.
- `ul` - Add unordered lists.
- `ol` - Add numbered lists.
- `dl` - Add description lists.
- `bq` - Add blockquotes.
- `code` - Add code samples.
- `headers` - Add headers.
- `allcaps` - Use ALL CAPS.
- `prude` - Prude version.
- `plaintext` - Return plain text, no HTML.

### Examples

- `http://api-lorem.herokuapp.com/10/short/headers`
- `http://api-lorem.herokuapp.com/10/short/headers/ul/ol`
- `http://api-lorem.herokuapp.com/3/long/headers/ul/ol/decorate/code`
- `http://api-lorem.herokuapp.com/10/short/headers/ul/ol/allcaps`
- `http://api-lorem.herokuapp.com/10/short/headers/ul/ol/plaintext`

