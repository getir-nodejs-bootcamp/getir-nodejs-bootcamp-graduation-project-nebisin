# Getir Node.js Bootcamp Graduation Project - Salim Bozok

This is the final project of the Node.js Bootcamp organized by Patika.dev and Getir.

## Live Project

```
https://frozen-ravine-05853.herokuapp.com/
```

## Installation

Download the source codes to your computer.

```
git clone https://github.com/getir-nodejs-bootcamp/getir-nodejs-bootcamp-graduation-project-nebisin.git
```

## Configuration

1. Go to the project directory

```
cd getir-nodejs-bootcamp-graduation-project-nebisin
```

2. Create .env file in the main directory and edit it as the following example

```
PORT=3000
MONGO_URI=mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net
MONGO_DB=getir-case-study
```

3. Install npm packages

```
npm install
```

## Running the application

```
npm run start
```

_You can run the tests with the following command:_

```
npm test
```

## Usage

- API has a single endpoint and only accepts POST requests.

```
POST /
Host: localhost:3000
Content-Type: application/json
```

- The request body must include a JSON with 4 fields.

```
{
    "startDate": "2016-01-26",
    "endDate": "2018-02-02",
    "minCount": 2700,
    "maxCount": 3000
}
```

- Response payload will have 3 main fields.

```
{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "key": "ibfRLaFT",
            "totalCount": 2892,
            "createdAt": "2016-12-25T16:43:27.909Z"
        },
        {
            "key": "pxClAvll",
            "totalCount": 2772,
            "createdAt": "2016-12-19T10:00:40.050Z"
        }
    ]
}
```

<br>

**Contact**: Salim Bozok ([GitHub](https://github.com/nebisin) - [Linkedin](https://www.linkedin.com/in/salimbozok/) - <salimbozok@outlook.com>)
