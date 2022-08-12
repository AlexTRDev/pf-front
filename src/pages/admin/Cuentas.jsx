import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsuarios } from '../../features/actions/admin';
import { useAuth0} from '@auth0/auth0-react'


export default function Cuentas() {
  const {getAccessTokenSilently} = useAuth0()
  // const { usuarios } = useSelector(({ usuariosSlice }) => usuariosSlice)
  const {usuarios} = useSelector(({adminStore})=> adminStore)
  console.log("USUARIOS", usuarios);
  const dispatch = useDispatch()
  useEffect(()=>{
    const getToken = async () =>{
      const token = await getAccessTokenSilently();
      console.log("TOKEN", token);
      dispatch(getAllUsuarios(token))
    }
    getToken();
  }, [dispatch])
  return (
    <div>
      <p>Baneados</p>{' '}
     
                  <div className="overflow-x-auto">
                  <table className="min-w-full text-sm divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="sticky left-0 p-4 text-left bg-white">
                          <label className="sr-only" htmlFor="row_all">
                            Select All
                          </label>
                          <input
                            className="w-5 h-5 border-gray-200 rounded"
                            type="checkbox"
                            id="row_all"
                          />
                        </th>
                        <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                          <div className="flex items-center">
                            Nombre
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 ml-1.5 text-gray-700"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            ></svg>
                          </div>
                        </th>
                        <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                          <div className="flex items-center">
                            Email
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 ml-1.5 text-gray-700"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            ></svg>
                          </div>
                        </th>
                        <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                          <div className="flex items-center">
                            Estado
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 ml-1.5 text-gray-700"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            ></svg>
                          </div>
                        </th>
                        <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                          <div className="flex items-center">
                            Numero de Telefono
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 ml-1.5 text-gray-700"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </th>
                        <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                          <div className="flex items-center">
                            Order de Compra
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 ml-1.5 text-gray-700"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    {usuarios && usuarios.map((u) => (
                    <tbody className="divide-y divide-gray-100">
                                          <tr>
                        <td className="sticky left-0 p-4 bg-white">
                          <label className="sr-only" htmlFor="row_2">
                            Row 2
                          </label>
                          <input
                            className="w-5 h-5 border-gray-200 rounded"
                            type="checkbox"
                            id="row_2"
                          />
                        </td>
                        <td className="p-4 font-medium whitespace-nowrap">{u.nombre}</td>
                        <td className="p-4 text-gray-700 whitespace-nowrap">
                          {u.email}
                        </td>
                        <td className="p-4 text-gray-700 whitespace-nowrap">
                          
                            {u.isBan? <strong className="bg-green-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium">"AVAIL"</strong> : <strong className="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium">"BANNED"</strong>}
                         
                        </td>
                        <td className="p-4 text-gray-700 whitespace-nowrap">
                          {u.pais}
                        </td>
                        <td className="p-4 text-gray-700 whitespace-nowrap">
                          SHOP-4235-1526
                        </td>
                      </tr>
                    </tbody>
                    ))}
                  </table>
                </div>
                
                </div>
      
  )
}
