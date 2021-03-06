# Generated by Django 3.2.1 on 2021-06-08 16:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(blank=True, max_length=200)),
                ('last_name', models.CharField(blank=True, max_length=200)),
                ('avatar', models.ImageField(default='avatar.jpg', upload_to='avatars/')),
                ('slug', models.SlugField(max_length=200, unique=True)),
                ('website', models.URLField(blank=True, max_length=50)),
                ('location', models.CharField(blank=True, max_length=200)),
                ('bio', models.TextField(blank=True, max_length=200)),
                ('email', models.EmailField(blank=True, max_length=200)),
                ('facebook', models.CharField(blank=True, max_length=200)),
                ('twitter', models.CharField(blank=True, max_length=200)),
                ('instagram', models.CharField(blank=True, max_length=200)),
                ('pinterest', models.CharField(blank=True, max_length=200)),
                ('others', models.CharField(blank=True, max_length=200)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ('-created',),
            },
        ),
    ]
