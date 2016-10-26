# Set up for testing with Ruby

### Install Ruby

##### For Mac

Good news, you already have Ruby!

Double check by executing this:
```
ruby -v
```

If you see output, you're all set.
If you get an error, follow the Windows instructions below.

##### For Windows 

- Download the installer from https://www.ruby-lang.org/en/documentation/installation/.
- Run the installer with all default settings.

----------------------------

### Install gems

Ruby libraries are called gems & are incredibly easy to install for your own use.

In your command line, just execute something in this pattern:

`gem install *gem_name*`

Now the library named *gem_name* is on your computer & globally accesible. Any file in your solution that needs the library just has to require it.

To get the example test up & running, cd to selenium101/ruby and execute

`bundle install`.

You may need to execute `gem install bundler` first, if you have never used bundler before.