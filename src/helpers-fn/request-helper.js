export const getDataHelper = (service, fetch_success, fetch_error, fetch_loading) => {
	fetch_loading();
	service
		.then(items => fetch_success(items))
		.catch(error => fetch_error(error))
};
