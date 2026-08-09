source "https://rubygems.org"

# Modern Jekyll — built the same way locally and in CI (GitHub Actions),
# so local preview matches production exactly. (Replaces the legacy
# `github-pages` gem, which caps at Ruby < 4.0 and can't run on this machine.)
gem "jekyll", "~> 4.4"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-seo-tag", "~> 2.9"
end

# `jekyll serve` needs WEBrick, which is no longer a default gem on Ruby 3+.
gem "webrick", "~> 1.9"

# Windows and JRuby do not include zoneinfo files, so bundle tzinfo-data.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
