import Api from "./api";

type LoginCredentialType = {
  email: string;
  password: string;
};
type SignUpCredentialType = {
  email: string;
  fullName: string;
  phoneNumber: string;
  password: string;
};

type ChangePasswordType = {
  oldPassword: string;
  newPassword: string;
  adminId: string;
};

type verifyOtpType = {
  email: string;
  otp: string;
};

const Services = {
  test() {
    return Api().get("/");
  },
  login(credential: LoginCredentialType) {
    return Api().post("auth/local/login", credential);
  },
  signUp(credential: SignUpCredentialType) {
    return Api().post("auth/local/signup", credential);
  },
  verifyOTP(credential: verifyOtpType) {
    return Api().post("auth/verify-otp", credential);
  },
  getUser() {
    return Api().get("auth/admin/verifytoken");
  },
  updateProfile(firstName: string, lastName: string) {
    var data = {
      firstName,
      lastName,
    };
    return Api().patch("auth/admin/profile", data);
  },
  sendChangePasswordLink(email: string) {
    var data = {
      email,
    };
    return Api().post("auth/admin/password/sendLink", data);
  },
  verifyToken(token: string, type: string) {
    var data = {
      token,
      type,
    };
    console.log(data);
    return Api().post("auth/admin/verifyPasswordChangeToken", data);
  },
  changePassword(body: ChangePasswordType) {
    return Api().patch("auth/admin/changePassword", body);
  },
  completeSignup(adminId: string, password: string) {
    return Api().patch("auth/admin/completeSignupProcess", {
      adminId,
      password,
    });
  },
  getAllAdmin(limit: Number, page: Number) {
    var params = {
      limit,
      page,
    };
    return Api().get(`/auth/admin/all`, { params });
  },
  blockUser(block: boolean, adminId: string) {
    return Api().patch("auth/admin/blockStatus", { block, adminId });
  },
  sendForgotPasswordLink(email: string) {
    var data = {
      email,
    };
    return Api().post("auth/admin/password/resetLink", data);
  },
  resetPassword(body: any) {
    return Api().post("auth/admin/password/reset", body);
  },
};

export default Services;
