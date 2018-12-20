import axios from 'axios';
export const uploadImage = (e) => (dispatch, getState) => {
    let self = this; self.setState({ 'uploadStat': 'uploading...' });
    if (e.target.files.length > 0) {

        const form = new FormData();
        form.append('image', e.target.files[0]);
        form.append('title', 'new file');
        const send_data = {
            'image': e.target.files[0],
            'title': 'new file'
        };
        axios.post('http://localhost:3000/api/imageUploads', send_data)
            .then((value) => {

                var img = new Image;
                img.src = value.data.image.data;
                console.log(img.src);

            })
            .catch((err) => {
                console.error(err);
            })

    }
}