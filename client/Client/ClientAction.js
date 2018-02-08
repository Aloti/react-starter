import uuid from 'uuid/v1'

const API_URL = 'http://localhost:3000/contacts/'

const GET_CONTACTS_REQUEST = 'GET_CONTACTS_REQUEST'
const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS'
const GET_CONTACTS_FAILURE = 'GET_CONTACTS_FAILURE'

const GET_CONTACT_REQUEST = 'GET_CONTACT_REQUEST'
const GET_CONTACT_SUCCESS = 'GET_CONTACT_SUCCESS'
const GET_CONTACT_FAILURE = 'GET_CONTACT_FAILURE'

const DELETE_CONTACT_REQUEST = 'DELETE_CONTACT_REQUEST'
const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS'
const DELETE_CONTACT_FAILURE = 'DELETE_CONTACT_FAILURE'

const ADD_CONTACT_REQUEST = 'ADD_CONTACT_REQUEST'
const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS'
const ADD_CONTACT_FAILURE = 'ADD_CONTACT_FAILURE'

export function getContacts(){
    return function (dispatch) {
        dispatch({
            type: GET_CONTACTS_REQUEST
        })
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: GET_CONTACTS_SUCCESS,
                    contacts: data
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_CONTACTS_FAILURE,
                    error: error
                })
            })
    }
    
}

export function getContact(id) {
    return function (dispatch) {
        dispatch({
            type: GET_CONTACT_REQUEST
        })
        fetch(API_URL+id)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: GET_CONTACT_SUCCESS,
                    contact: data
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_CONTACT_FAILURE,
                    error: error
                })
            })
    }
}

export function addContact(contact) {
    return function (dispatch) {
        dispatch({
            type: ADD_CONTACT_REQUEST
        })
        fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: uuid(),
                name: contact.name,
                email: contact.email,
                phone: contact.phone,
                position: contact.position,
                company: contact.company
            }),
        })
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: ADD_CONTACT_SUCCESS,
                    contact: data
                })
            })
            .catch(error => {
                dispatch({
                    type: ADD_CONTACT_FAILURE,
                    error: error
                })
            })
    }
}

export function deleteContact(id) {
    return function (dispatch) {
        dispatch({
            type: DELETE_CONTACT_REQUEST
        })
        fetch(API_URL+id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: DELETE_CONTACT_SUCCESS,
                    id: id
                })
            })
            .catch(error => {
                dispatch({
                    type: DELETE_CONTACT_FAILURE,
                    error: error
                })
            })
    }
}