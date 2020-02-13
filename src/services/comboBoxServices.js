import { sleep } from '../util/generalUtilities'

// import api from "./api";

export const fetchComboBoxItens = async url => {
  await sleep(2000)
  const resultFake = [
    { IdOperacao: 1, DescricaoOperacao: 'CETELEM' },
    { IdOperacao: 2, DescricaoOperacao: 'BVICRED' },
    { IdOperacao: 3, DescricaoOperacao: 'COREVALUE' }
  ]
  return resultFake
  //   const result = await api.get(url);
  //   return result;
}
