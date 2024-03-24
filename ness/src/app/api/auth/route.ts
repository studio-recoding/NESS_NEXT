import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    console.log('json' + JSON.stringify(json));
    const response = await axios.post('http://13.125.106.110:8080/login/oauth/google?code=' + json.authorizationCode);


    console.log('response' + response);
    
    return NextResponse.json(json)


  } catch (e) {
    console.log(e);
    return new Response(null, { status: 400, statusText: "Bad Request" });
  }
  
}
