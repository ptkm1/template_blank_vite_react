import { useLoaderData } from 'react-router-dom'
import { AppTemplate } from '../../Atomic/Templates/App.Template'

export const Dashboard = () => {

  const router: any = useLoaderData()

  return (
    <AppTemplate>
      <div>Dashboard</div>
    </AppTemplate>
  )
}
