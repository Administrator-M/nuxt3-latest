import $api from "@/api/api";

export default {
  logoutPut: (params: any) => {$api(`/login/${params.id}`, { method: `put`, params })},
  logoutDelete: (params: any) => {$api(`/login`, { method: `delete`, params })},
};
