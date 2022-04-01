RailsAdmin.config do |config|

  config.authenticate_with do
    #sorceryのメソッド
    require_login
    redirect_to login_path unless current_user.admin? # 追記
  end
  config.current_user_method(&:current_user)
  config.authorize_with :cancancan

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
