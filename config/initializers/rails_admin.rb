RailsAdmin.config do |config|

  config.authenticate_with do
    #sorceryのメソッド
    require_login
  end
  config.current_user_method(&:current_user)

  config.actions do
    dashboard
    index
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end
  config.parent_controller = 'ApplicationController'
end
