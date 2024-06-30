import React, { createContext, useEffect, useReducer } from "react";

// Hàm kiểm tra và phân tích dữ liệu từ localStorage
const parseLocalStorageData = (key) => {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error parsing data from localStorage for key ${key}:`, error);
    return null;
  }
};

// Khởi tạo trạng thái ban đầu từ localStorage
const initialUser = parseLocalStorageData("user");
const initialRole = parseLocalStorageData("role");
const initialState = {
  user: initialUser,
  loading: false,
  error: null,
  role: initialRole,
};

// Context và Reducer
export const AuthContext = createContext(initialState);
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: false,
        error: null,
        role: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        loading: false,
        error: null,
        role: action.payload.role,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
        role: null,
      };
    case "REGISTER_SUCCESS":
      return {
        user: null,
        loading: false,
        error: null,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
        role: null,
      };
    default:
      return state;
  }
};

// Provider
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("role", JSON.stringify(state.role));
  }, [state.user, state.role]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        role: state.role,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
