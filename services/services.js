const baseURL = ref("https://iteach-jedq.onrender.com/")
export default {
    getAllCourses() {
        return $fetch(`${baseURL.value}courses/get`)
    },
    addCourse(form, userToken) {
        return $fetch(`${baseURL.value}courses/create_course`, {
            method: 'POST',
            body: form,
            headers: {
                "Authorization": `Bearer ${userToken}`,
            }
        })
    },
    login(formdata) {
        return $fetch(`${baseURL.value}token`, {
            method: 'POST',
            body: formdata,
        })
    },
    deleteCourse(id, userToken) {
        return $fetch(`${baseURL.value}courses/delete/`, {
            method: 'DELETE',
            params: {
                ident: id
            },
            headers: {
                "Authorization": `Bearer ${userToken}`,
            }
        })
    },
    editCourse(form, userToken, id) {
        return $fetch(`${baseURL.value}courses/update_admin`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
            params: {
                ident: id
            },
            body: form,
        })
    },
    uploadIMG(form, userToken, id) {
        return $fetch(`${baseURL.value}courses/upload-image`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
            params: {
                ident: id
            },
            body: form,
        })
    },
    uploadVid(form, userToken, id) {
        return $fetch(`${baseURL.value}courses/upload-video`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
            params: {
                ident: id
            },
            body: form,
        })
    },
}