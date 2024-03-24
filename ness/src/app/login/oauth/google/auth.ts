"use client"

import axios from 'axios'

export async function getToken(authorizationCode: string) {
  try {
    const response = await axios.post('http://13.125.106.110:8080/login/oauth/google?code=' + authorizationCode);
    console.log('Token saved successfully');
    console.log('response' + response);
    return response;
  } catch (error) {
    console.error('Error fetching token:', error);
  }
}