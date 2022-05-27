const GET = async (endpoint: string, headers: any = {}) => {
  return new Promise(function (resolve, reject) {
    fetch(endpoint, {
      method: 'GET',
      headers: {
        ...headers,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(respond => {
        console.log('eee', respond);
        if (respond.status === 200) {
          return respond.json();
        } else {
          reject('Invalid Input');
        }
      })
      .then(responsJeson => resolve(responsJeson))
      .catch(exception => reject('Error: ' + exception));
  });
};

export {GET};
