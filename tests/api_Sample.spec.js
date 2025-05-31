import {test,request, expect} from '@playwright/test';
let BASEURL = 'https://restful-booker.herokuapp.com/booking/'

test('auth token',async() => {

    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post('https://restful-booker.herokuapp.com/auth', {
    data: {
        "username" : "admin",
        "password" : "password123"
        },
    });
    
    expect(loginResponse.ok()).toBeTruthy();
    const loginData = await loginResponse.json();
    process.env.Auth_token = loginData.token;
});

test('post Request - API', async({request}) => {
    const response = await request.post(BASEURL, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        data:
        {
            "firstname": "Sally",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2025-05-23",
                "checkout": "2025-10-23"
            },
            "additionalneeds": "Breakfast"
        }
    })

    expect(response.ok()).toBeTruthy();

    const firstName = await response.text();
    expect(firstName).toContain("Sally")

    const response_body = await response.json();
    
    process.env.id = response_body.bookingid;
    console.log(response_body);
    
})

test('Get Request - API', async({request}) => {
    const url = BASEURL + `${process.env.id}`;
    const response = await request.get(url, {
        headers: {
            "Accept": "application/json"
        }
    })
    expect(response.ok()).toBeTruthy();
    
    const response_body = await response.json();
    console.log(response_body);
    //console.log(response)
    
    // const firstName = await response.text();
    // expect(firstName).toContain("sally")

})



test('put Request - API', async({request}) => {
    const url = BASEURL + `${process.env.id}`;
    const response = await request.put(url, {
        headers: {
            "Content-Type": "application/json",
            "Cookie": `token=${process.env.Auth_token}`,
            "Accept": "application/json",
            "Authorization": `Basic ${process.env.Auth_token}`
        },
        data:
        {
            "firstname" : "James",
            "lastname" : "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2025-05-23",
                "checkout": "2025-10-23"
            },
            "additionalneeds": "Breakfast"
        }
    })
     
    const response_body = await response.json();
    
    console.log(response_body);


    expect(response.status()).toBe(200)

    const firstName = await response.text();
    expect(firstName).toContain("James")
    

})

test('patch Request - API', async({request}) => {
    const url = BASEURL + `${process.env.id}`;
    const response = await request.patch(url, {
        headers: {
            "Content-Type": "application/json",
            "Cookie": `token=${process.env.Auth_token}`,
            "Accept": "application/json",
            "Authorization": `Basic ${process.env.Auth_token}`
        },
        data:
        {
            "additionalneeds": "lunch"
        }
    })
     
    const response_body = await response.json();
    
    console.log(response_body);


    expect(response.status()).toBe(200)

    const addition_need = response_body.additionalneeds;
    expect(addition_need).toContain("lunch");
})

test('Delete Request - API', async({request}) => {
    const url = BASEURL + `${process.env.id}`;
    const response = await request.delete(url, {
        headers: {
            "Cookie": `token=${process.env.Auth_token}`,
            "Authorization": `Basic ${process.env.Auth_token}`
        },
    })
     
    //const response_body = await response.json();
    
    //console.log(response_body);


    expect(response.ok()).toBeTruthy();

})

test('Get Request post Delete - API', async({request}) => {
    const url = BASEURL + `${process.env.id}`;
    const response = await request.get(url, {
        headers: {
            "Accept": "application/json"
        }
    })

    expect(response.status()).toBe(404)
    
    // const response_body = await response.json();
    // console.log(response_body);
    // //console.log(response)
    
    // const firstName = await response.text();
    // expect(firstName).toContain("sally")
})