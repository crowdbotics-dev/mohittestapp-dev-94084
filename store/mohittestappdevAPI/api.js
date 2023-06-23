import axios from "axios";
const mohittestappdevAPI = axios.create({
  baseURL: "https://mohittestapp-dev-94084.botics.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function api_docs_schema_retrieve(payload) {
  return mohittestappdevAPI.get(`/api-docs/schema/`, {
    params: {
      lang: payload.lang
    }
  });
}

function api_v1_login_create(payload) {
  return mohittestappdevAPI.post(`/api/v1/login/`, payload.data);
}

function api_v1_signup_create(payload) {
  return mohittestappdevAPI.post(`/api/v1/signup/`, payload.data);
}

function api_v1_testing_list(payload) {
  return mohittestappdevAPI.get(`/api/v1/testing/`);
}

function api_v1_testing_create(payload) {
  return mohittestappdevAPI.post(`/api/v1/testing/`, payload.data);
}

function api_v1_testing_retrieve(payload) {
  return mohittestappdevAPI.get(`/api/v1/testing/${payload.id}/`);
}

function api_v1_testing_update(payload) {
  return mohittestappdevAPI.put(`/api/v1/testing/${payload.id}/`, payload.data);
}

function api_v1_testing_partial_update(payload) {
  return mohittestappdevAPI.patch(`/api/v1/testing/${payload.id}/`, payload.data);
}

function api_v1_testing_destroy(payload) {
  return mohittestappdevAPI.delete(`/api/v1/testing/${payload.id}/`);
}

function rest_auth_login_create(payload) {
  return mohittestappdevAPI.post(`/rest-auth/login/`, payload.data);
}

function rest_auth_logout_retrieve(payload) {
  return mohittestappdevAPI.get(`/rest-auth/logout/`);
}

function rest_auth_logout_create(payload) {
  return mohittestappdevAPI.post(`/rest-auth/logout/`);
}

function rest_auth_password_change_create(payload) {
  return mohittestappdevAPI.post(`/rest-auth/password/change/`, payload.data);
}

function rest_auth_password_reset_create(payload) {
  return mohittestappdevAPI.post(`/rest-auth/password/reset/`, payload.data);
}

function rest_auth_password_reset_confirm_create(payload) {
  return mohittestappdevAPI.post(`/rest-auth/password/reset/confirm/`, payload.data);
}

function rest_auth_registration_create(payload) {
  return mohittestappdevAPI.post(`/rest-auth/registration/`, payload.data);
}

function rest_auth_registration_verify_email_create(payload) {
  return mohittestappdevAPI.post(`/rest-auth/registration/verify-email/`, payload.data);
}

function rest_auth_user_retrieve(payload) {
  return mohittestappdevAPI.get(`/rest-auth/user/`);
}

function rest_auth_user_update(payload) {
  return mohittestappdevAPI.put(`/rest-auth/user/`, payload.data);
}

function rest_auth_user_partial_update(payload) {
  return mohittestappdevAPI.patch(`/rest-auth/user/`, payload.data);
}

export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_testing_list,
  api_v1_testing_create,
  api_v1_testing_retrieve,
  api_v1_testing_update,
  api_v1_testing_partial_update,
  api_v1_testing_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
};