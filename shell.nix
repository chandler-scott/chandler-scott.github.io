{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.ruby
    pkgs.bundler
    pkgs.nodejs  # Node.js is often needed for Jekyll
  ];

  shellHook = ''
    # Set GEM_HOME to a local directory in the project
    export GEM_HOME=$PWD/.gem
    export PATH=$GEM_HOME/bin:$PATH

    # Install the jekyll and bundler gems
    gem install jekyll bundler --no-document

    if [ ! -r Gemfile ]; then
      bundle init
      bundle add jekyll
    fi

    # set aliases
    alias jekyll='bundle exec jekyll'
    alias new='jekyll new'
    alias serve='jekyll serve'

    # echo stdin
    echo "INFO: nix-shell ready for jekyll development."
  '';
}

