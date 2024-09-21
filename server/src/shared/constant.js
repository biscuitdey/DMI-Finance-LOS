module.exports = {
	'EMAIL_PASS_ERROR': `Email and/or Password can't be blank`,
	'RES_OBJ': {
		'STATUS': {
			'SUCCESS': true,
			'FAIL': false
		},
		'CODE': {
			'SUCCESS': 200,
			'FAIL': 400,
			'UNAUTHORIZED': 401,
			'NOT_FOUND': 404
		},
		'MSG': {
			'SUCCESS': 'The request is OK',
			'FAIL': 'Oops!!! Something went wrong',
			'UNAUTHORIZED': 'Invalid User Credentials',
			'NOT_FOUND': 'Requested resource not found'
		}
	}
}