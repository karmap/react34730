import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const getProductsByCategory = async(categoryId) => {
    const db = getFirestore()
    const itemCollection = collection( db, 'items' )
    const q = query(itemCollection, where('category', '==', categoryId) )
    const snapshot = await getDocs( q )
    return ( snapshot.docs.map( d => ({id: d.id, ...d.data()}) ) )
}

export { getProductsByCategory }