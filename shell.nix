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

    bundle init
    bundle add jekyll

    alias jekyll='bundle exec jekyll'
  '';
}

