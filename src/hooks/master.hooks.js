import axios from "axios"
import moment from "moment"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { sortBy } from "../helpers"
import { endpoints } from "../static/endPoints"
import { ACTIONS } from "../store/actions"
import { getImage, useImage } from "./image.hooks"

export const useMaster = () => {
    const dispatch = useDispatch()
    const global = useSelector(state => state.global?.banner)
    useEffect(_ => {

        const getMaster = async () => {
            const department = await axios.get(endpoints.department.get)
            const departmentService = await axios.get(endpoints.department.service.get)
            const departmentCounter = await axios.get(endpoints.department.counter.get)
            const departmentFlow = await axios.get(endpoints.department.flow.get)
            const departmentLaw = await axios.get(endpoints.department.law.get)
            const departmentSyarat = await axios.get(endpoints.department.syarat.get)
            const departmentTimeplace = await axios.get(endpoints.department.timeplace.get)
            const facility = await axios.get(endpoints.facility.get)
            const gallery = await axios.get(endpoints.gallery.get)
            const queue = await axios.get(endpoints.queue.get + `?tgl=${moment().format('YYYY-MM-DD')}`)
            const queueTime = await axios.get(endpoints.queueTime.get)
            const queueDay = await axios.get(endpoints.statistik.queueDay)
            const queueProcessed = await axios.get(endpoints.statistik.queueProcessed)
            const queueService = await axios.get(endpoints.statistik.queueService)
            const queuedepartment = await axios.get(endpoints.statistik.queuedepartment)
            const banner = await axios.get(endpoints.banner.get)

            const bannerList = await Promise.all(await banner?.data?.data?.map(async data => {
                const img = await getImage(data?.photo)
                return img
            }))

            const galleryList = await Promise.all(await gallery?.data?.data?.map(async data => {
                const img = await getImage(data?.photo)
                return {
                    ...data,
                    photo: img
                }
            }))

            dispatch(ACTIONS.global.setMaster({
                banner: banner?.data?.data,
                bannerList,
                department: sortBy(department?.data?.data, 'name'),
                departmentService: sortBy(departmentService?.data?.data, 'name'),
                departmentCounter: sortBy(departmentCounter?.data?.data, 'name'),
                departmentFlow: sortBy(departmentFlow?.data?.data, 'name'),
                departmentLaw: sortBy(departmentLaw?.data?.data, 'name'),
                departmentSyarat: sortBy(departmentSyarat?.data?.data, 'name'),
                departmentTimeplace: sortBy(departmentTimeplace?.data?.data, 'name'),
                facility: facility?.data?.data,
                gallery: gallery?.data?.data,
                queue: queue?.data?.data,
                queueTime: queueTime?.data?.data,
                queueDay: queueDay?.data?.data,
                queueProcessed: queueProcessed?.data?.data,
                queueService: queueService?.data?.data,
                queuedepartment: queuedepartment?.data?.data,
                galleryList
            }))

        }

        getMaster()

    }, [])
}