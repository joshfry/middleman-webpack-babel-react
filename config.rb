# -------------------------------------------------------------------
# Page options, layouts, aliases and proxies
# -------------------------------------------------------------------

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# -------------------------------------------------------------------
# General configuration
# -------------------------------------------------------------------

activate :directory_indexes

#
# Use webpack for assets
#
activate :external_pipeline,
  name: :webpack,
  # using yarn command at `./node_modules/yarn/bin/yarn`
  # because it won't be globally installed on build server
  command: build? ?  "./node_modules/yarn/bin/yarn run build" : "./node_modules/yarn/bin/yarn run start",
  source: ".tmp/dist",
  latency: 1

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

set :css_dir,    'assets/stylesheets'
set :js_dir,     'assets/javascripts'
set :images_dir, 'images'

# -------------------------------------------------------------------
# Helpers
# -------------------------------------------------------------------

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# -------------------------------------------------------------------
# Build-specific config
# -------------------------------------------------------------------

# Build-specific configuration
configure :build do
  # Enable cache buster (except for images)
  activate :asset_hash, ignore: [/\.jpg\Z/, /\.png\Z/]
end
