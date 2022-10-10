<!--
title: Prueba técnica Culqui
authorName: Charly Trejo
-->

## Usage

### Deployment

```
$ docker-compose up --build
```

### Invocation
After successful deployment, use a Rest API Client to call the app.

```
Example 3:

endpoint:
    POST - http://localhost:3000/api/permutation/find

    body:
        {
            "s": "barfoofoobarthefoobarman",
            "words": [
                "bar",
                "foo",
                "the"
            ]
        }
```
You should get a response like this:
```
    [
        6,
        9,
        12
    ]
```

This response will be saved in the docker container's local mongo database culqui collection.
```
mongodb://localhost:27018/
```