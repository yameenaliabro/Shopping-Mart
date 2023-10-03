export type Login = {
    username: string;
    password: string;
};

export type register = {
    email: string;
    username: string;
    phoneNumber: number;
    passwrord: string;
    dob: number;
};

export type AuthContetType = {
    login: (props: Login) => void;
    registerUser: (props: register) => void;
    signout: VoidFunction;
    isAuthenticated: boolean;
    loading: boolean;
};
