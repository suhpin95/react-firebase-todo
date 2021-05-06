import firebase from "./firebase";
const tasks = firebase
                    .firestore()
                    .collection('tasks')
                    .onSnapshot((snapShot)=> {
                        snapShot.docs.forEach((doc)=> {
                            console.log(doc.data());
                        })
                    })

export const getAll = () => {
    return tasks
}