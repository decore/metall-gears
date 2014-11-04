compass_config do |config|
  config.output_style = :compact
  config.sass_options = { :line_comments => false }
end

require 'slim'
#activate :livereload
#activate :directory_indexes

set :js_dir, 'js'
set :css_dir, 'css'
set :images_dir, 'img'

# Add bower's directory to sprockets asset path
after_configuration do

  @bower_config = JSON.parse(IO.read("#{root}/.bowerrc"))
  sprockets.append_path File.join "#{root}", @bower_config["directory"]

end
Slim::Engine.set_default_options :pretty => true
# Build-specific configuration
configure :build do

  #activate :minify_css
  #activate :minify_javascript
  #activate :asset_hash

  activate :relative_assets
  set :relative_links, true

end