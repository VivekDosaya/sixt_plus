import { db } from "./setup";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  setDoc,
  orderBy,
  limit,
} from "firebase/firestore";

export const allDocuments = (collectionName) => {
  return getDocs(collection(db, collectionName));
};
export const allDocumentsWithLimit = (
  collectionName,
  order_by_field,
  limit_number
) => {
  return getDocs(
    collection(db, collectionName),
    orderBy(order_by_field),
    limit(20)
  );
};

export const specificDocumentsUsingWhere = (
  collectionName,
  docKey,
  docValue
) => {
  let x;
  try {
    x = getDocs(
      query(collection(db, collectionName), where(docKey, "==", docValue))
    );
  } catch (e) {
    console.log(e);
  }
  return x;
};

export const specificDocumentsUsingIn = (
  collectionName,
  docKey,
  docValueArray
) => {
  return getDocs(
    query(collection(db, collectionName), where(docKey, "in", docValueArray))
  );
};

export const updateDocumentData = (updateObj, collectionName, field_name) => {
  return updateDoc(doc(db, collectionName, field_name), {
    ...updateObj,
  });
};

export const setNewDocument = (collectioName, doc_id, doc_object) => {
  return setDoc(doc(db, `/${collectioName}/${doc_id}`), { ...doc_object });
};
