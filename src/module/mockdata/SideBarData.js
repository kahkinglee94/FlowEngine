export default [
    {
        name: 'SignElement',
        label: '簽核元件',
        icon: '',
        id: '',
        children: [
          {
            name: 'SerialSign',
            label: '串簽',
            icon: 'fas fa-cog'
          },
          {
            name: 'ParallelSign',
            label: '會簽',
            icon: 'fas fa-cog'
          },
          {
            name: 'ChooseOneSign',
            label: '多人擇一簽',
            icon: 'fas fa-cog'
          },

        ]
    },
    {
        name: 'Plm',
        label: 'PLM開案管理',
        icon: '',
        id: '',
        children: [
          {
            name: 'GeneralPsa',
            label: '一般開案單',
            icon: 'fas fa-cog'
          },
          {
            name: 'SalesPsa',
            label: '業務開案單',
            icon: 'fas fa-cog'
          },
          {
            name: 'RdFixture',
            label: 'RD治具',
            icon: 'fas fa-cog'
          },
        ]
    },
    {
      name: 'MonitorSRM',
      label: 'MonitorSRM',
      icon: '',
      id: '',
      children: []
  },
]