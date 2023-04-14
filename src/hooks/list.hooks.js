import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const useList = () => {
  const [modal, setModal] = useState(false);
  const modalHandler = useCallback((props) => {
    setModal(props);
  }, []);
  const userList = useSelector((state) => state?.user.userList);
  const tableHeader = useMemo((_) => userList[0], []);
  const nav = useNavigate();
  const userListIsEmpty = userList?.length === 0;
  useEffect((_) => {
    if (userListIsEmpty) nav("/form");
  }, []);

  return {
    userList,
    tableHeader,
    nav,
    userListIsEmpty,
    modalHandler,
    modal,
  };
};
