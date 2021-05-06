import firebase from "./firebase";
  
export const fetchAll = () => {
    let tasks = []         
    firebase.firestore()
            .collection('tasks')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {
                    tasks.push({
                        ...doc.data()
                    });
                });
            })
            .catch(error => {
                console.log("Error getting documents: ", error);
            });
    
    return tasks
}