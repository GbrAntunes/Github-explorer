import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from '../pages/dashboard'
import Repository from '../pages/repository'

const Routes: React.FC = () => (
    // Switch garante que apenas o conteúdo de uma rota seja exibido
    <Switch>
        <Route path="/" component={ Dashboard } exact />
        {/* O + evita que a rota, ao se deparar com uma barra no nome, interprete como outro endpoint */}
        <Route path="/repositories/:repository+" component={ Repository } />
    </Switch>
)

export default Routes