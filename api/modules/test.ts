import $api from "@/api/api";

export default {
  loginGet: (params: any) => {return $api(`/login/${params.id}`, { method: `get` })},
  loginPost: (body: any) => {return $api(`/login`, { method: `post`, body })},
  loginPut: (body: any) => {return $api(`/login/${body.id}`, { method: `put`, body })},
  loginDelete: (body: any) => {return $api(`/login`, { method: `delete`, body })},
  logOut: (body: any) => {return $api(`/xxx/${body.id}`, {method: 'put', body:  body.obj})}
};
