import { Chart, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend, TimeScale } from 'chart.js'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend, TimeScale)

export default Chart
