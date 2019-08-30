import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import Company from '@/components/pages/Company'
import School from '@/components/pages/School'
import Words from '@/components/pages/Words'
import Resume from '@/components/pages/Resume'
import Deliver from '@/components/pages/Deliver'
import Collect from '@/components/pages/Collect'
import NotFound from '@/components/error/NotFound'
import JobsDetail from '@/components/pages/JobsDetail'
import MyBooking from '@/components/pages/MyBooking'
import Position from '@/components/pages/Position'
import Question from '@/components/pages/Question'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    // {
    //   path: '/dist',
    //   redirect:'/'
    // },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/company',
      name: 'company',
      component: Company
    },
    {
      path: '/school',
      name: 'school',
      component: School
    },
    {
      path: '/words',
      name: 'words',
      component: Words
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/msgbox',
      name: 'deliver',
      component: Deliver
    },
    {
      path: '/collect',
      name: 'collect',
      component: Collect
    },
    {
       path: '/JobsDetail/:type',
       name: 'jobsDetail',
       component: JobsDetail
    },
    {
       path: '/myBooking',
       name: 'myBooking',
       component: MyBooking
    },
    {
      path: '/position',
      name: 'position',
      component: Position
    },
    {
      path: '/question',
      name: 'question',
      component: Question
    },
    {
      path: '/404',
      name: 'notFound',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ],
  mode: 'history',
  // base: '/dist'
})
